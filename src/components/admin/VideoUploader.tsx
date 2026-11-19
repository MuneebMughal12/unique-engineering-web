"use client";

import { useRef, useState } from "react";

const MAX_VIDEO_BYTES = 100 * 1024 * 1024;

type UploadSignature = {
  cloudName: string;
  apiKey: string;
  timestamp: number;
  folder: string;
  signature: string;
};

export default function VideoUploader({
  value,
  onChange,
  label = "Videos",
}: {
  value: string[];
  onChange: (urls: string[]) => void;
  label?: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");

  async function getSignature(): Promise<UploadSignature> {
    const response = await fetch("/api/admin/video-upload-signature", { method: "POST" });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || "Could not prepare video upload.");
    return data as UploadSignature;
  }

  function uploadFile(file: File, signed: UploadSignature): Promise<string> {
    return new Promise((resolve, reject) => {
      const form = new FormData();
      form.append("file", file);
      form.append("api_key", signed.apiKey);
      form.append("timestamp", String(signed.timestamp));
      form.append("folder", signed.folder);
      form.append("signature", signed.signature);

      const request = new XMLHttpRequest();
      request.open("POST", `https://api.cloudinary.com/v1_1/${signed.cloudName}/video/upload`);
      request.upload.onprogress = (event) => {
        if (event.lengthComputable) setProgress(Math.round((event.loaded / event.total) * 100));
      };
      request.onload = () => {
        try {
          const data = JSON.parse(request.responseText || "{}");
          if (request.status >= 200 && request.status < 300 && data.secure_url) {
            resolve(data.secure_url.replace("/video/upload/", "/video/upload/f_auto,q_auto/"));
          } else {
            reject(new Error(data.error?.message || "Video upload failed."));
          }
        } catch {
          reject(new Error("Cloudinary returned an invalid upload response."));
        }
      };
      request.onerror = () => reject(new Error("Video upload failed. Check your connection."));
      request.send(form);
    });
  }

  async function handleFiles(files: FileList | null) {
    if (!files?.length) return;
    setBusy(true);
    setError("");
    setProgress(0);
    const added: string[] = [];
    try {
      for (const file of Array.from(files)) {
        if (!file.type.startsWith("video/")) throw new Error("Only video files are allowed.");
        if (file.size > MAX_VIDEO_BYTES) throw new Error("Each video must be smaller than 100 MB.");
        added.push(await uploadFile(file, await getSignature()));
      }
      if (added.length) onChange([...value, ...added]);
    } catch (uploadError) {
      setError(uploadError instanceof Error ? uploadError.message : "Video upload failed.");
    } finally {
      setBusy(false);
      setProgress(0);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  function move(index: number, direction: -1 | 1) {
    const destination = index + direction;
    if (destination < 0 || destination >= value.length) return;
    const next = [...value];
    [next[index], next[destination]] = [next[destination], next[index]];
    onChange(next);
  }

  return (
    <div>
      <p className="eyebrow mb-2">{label}</p>
      <div className="rounded-sm border border-dashed border-[#333] bg-[#0f0f0f] p-5 text-center">
        <input ref={inputRef} type="file" accept="video/mp4,video/webm,video/quicktime" multiple className="hidden" onChange={(event) => handleFiles(event.target.files)} />
        <button type="button" onClick={() => inputRef.current?.click()} disabled={busy} className="rounded-full bg-[#d2a24c] px-5 py-2.5 text-sm font-medium text-black disabled:opacity-50">
          {busy ? `Uploading video… ${progress}%` : "Choose videos from computer"}
        </button>
        <p className="mt-2 text-xs text-[#6a6a6a]">MP4, WebM or MOV · maximum 100 MB each</p>
      </div>
      {error && <p className="mt-2 text-sm text-[#ff6b6b]">{error}</p>}
      {value.length > 0 && (
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {value.map((url, index) => (
            <div key={`${url}-${index}`} className="group relative aspect-video overflow-hidden rounded-sm border border-[#242424] bg-black">
              <video src={url} muted playsInline preload="metadata" className="h-full w-full object-cover" />
              <span className="absolute left-2 top-2 rounded bg-black/70 px-2 py-1 text-[10px] text-white">VIDEO</span>
              <div className="absolute inset-x-0 bottom-0 flex justify-between bg-gradient-to-t from-black/90 p-2 opacity-0 transition-opacity group-hover:opacity-100">
                <button type="button" onClick={() => move(index, -1)} className="rounded bg-black/70 px-2 text-white">←</button>
                <button type="button" onClick={() => onChange(value.filter((_, itemIndex) => itemIndex !== index))} className="rounded bg-[#d2a24c] px-2 text-black">✕</button>
                <button type="button" onClick={() => move(index, 1)} className="rounded bg-black/70 px-2 text-white">→</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
