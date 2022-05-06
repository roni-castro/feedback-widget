import { Camera, Trash } from 'phosphor-react';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { Loading } from '../Loading';

interface ScreenShotButtonProps {
  onScreenShotTook: (base64: string | null) => void;
  screenshotBase64: string | null;
}

export function ScreenShotButton({
  onScreenShotTook,
  screenshotBase64,
}: ScreenShotButtonProps) {
  const [isTakingScreenShot, setIsTakingScreenShot] = useState(false);

  async function handleTakeScreenShot() {
    setIsTakingScreenShot(true);
    const canvas = await html2canvas(document.querySelector('html')!);
    const base24Image = canvas.toDataURL('image/jpg');

    onScreenShotTook(base24Image);
    setIsTakingScreenShot(false);
  }

  if (screenshotBase64) {
    return (
      <button
        type="button"
        className="p-1 w-10 border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage: `url(${screenshotBase64})`,
          backgroundSize: 'contain',
        }}
      >
        <Trash weight="fill" onClick={() => onScreenShotTook(null)} />
      </button>
    );
  }

  return (
    <button
      type="button"
      className="p-2 w-10 bg-zinc-800 rounded-md border-transparent flex justify-center items-center hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
      onClick={handleTakeScreenShot}
    >
      {isTakingScreenShot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  );
}
