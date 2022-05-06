import { ArrowLeft, Camera } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { CloseButton } from '../CloseButton';
import { feedbackTypes } from '../WidgetForm/data';
import { FeedbackType } from '../WidgetForm/interface';
import { ScreenShotButton } from '../WidgetForm/ScreenShotButton';

interface FeedbackContentStepProps {
  type: FeedbackType;
  onFeedbackRestart: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  type,
  onFeedbackRestart,
  onFeedbackSent,
}: FeedbackContentStepProps) {
  const [screenshot, setScreenShot] = useState<string | null>(null);
  const [comment, setComment] = useState('');
  const feedbackType = feedbackTypes[type];

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(comment, screenshot);

    onFeedbackSent();
  }

  return (
    <div>
      <header className="flex flex-col items-center">
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          title="Voltar para opções de feedback"
          onClick={onFeedbackRestart}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <div className="flex gap-2 items-center">
          <img
            className="w-6"
            src={feedbackType.image.source}
            alt={feedbackType.image.alt}
          />
          <h1 className="text-xl leading-6 text-center font-medium ">
            {feedbackType.title}
          </h1>
          <CloseButton />
        </div>
      </header>
      <form className="my-4 w-full" onSubmit={handleSubmit}>
        <textarea
          className="min-w-[304px] min-h-[112px] w-full py-2 px-3 text-sm rounded-md 
          placeholder-zinc-400 text-zinc-100 bg-transparent border-zinc-600 
          focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none 
          scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
          onChange={(event) => setComment(event.target.value)}
          defaultValue={comment}
        />
        <footer className="flex gap-2 mt-2">
          <ScreenShotButton
            onScreenShotTook={setScreenShot}
            screenshotBase64={screenshot}
          />
          <button
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm 
            hover:bg-brand-300 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 
            transition-colors
            disabled:opacity-50 disabled:hover:bg-brand-500
            "
            type="submit"
            disabled={!comment}
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </div>
  );
}
