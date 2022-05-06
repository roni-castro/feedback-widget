import { CloseButton } from '../CloseButton';
import { feedbackTypes } from '../WidgetForm/data';
import { FeedbackType } from '../WidgetForm/interface';

interface FeedbackTypeStepProps {
  onFeedbackTypeClick: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({
  onFeedbackTypeClick,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <h1 className="text-xl text-center leading-6 font-medium ">
          Deixe seu feedback
        </h1>
        <CloseButton />
      </header>
      <div className="flex gap-2 mt-8 mb-12 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            type="button"
            className="relative flex flex-col flex-1 items-center py-5 w-24 rounded-lg bg-zinc-800 border-2 border-transparent hover:border-2 hover:border-brand-500"
            key={key}
            onClick={() => onFeedbackTypeClick(key as FeedbackType)}
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span className="text-sm leading-6 font-medium text-center">
              {value.title}
            </span>
          </button>
        ))}
      </div>
    </>
  );
}
