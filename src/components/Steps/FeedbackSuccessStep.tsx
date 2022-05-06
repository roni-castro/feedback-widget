import Success from '../../assets/success.svg';
import { CloseButton } from '../CloseButton';

interface FeedbackSuccessStepProps {
  onRestartClick: () => void;
}

export function FeedbackSuccessStep({
  onRestartClick,
}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>
      <div className="py-10 flex flex-col items-center w-[304px]">
        <img src={Success} alt="Image de um check de sucesso" />
        <span className="text-xl leading-6 font-medium mt-2">
          Agradecemos o feedback!
        </span>
        <button
          type="button"
          className="py-2 px-6 mt-6 bg-zinc-800 hover:bg-zinc-600 transition-colors border-transparent rounded-md
          focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none "
          onClick={onRestartClick}
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
}
