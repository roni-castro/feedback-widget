import { useState } from 'react';
import { Footer } from '../Footer';
import { FeedbackContentStep } from '../Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from '../Steps/FeedbackSuccessStep';
import { FeedbackTypeStep } from '../Steps/FeedbackTypeStep';
import { FeedbackType } from './interface';

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleResetFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  function handleFeedbackSent() {
    setFeedbackSent(true);
  }

  return (
    <div className="flex flex-col items-center shadow-lg bg-zinc-900 rounded-2xl p-4 mb-4 w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep onRestartClick={handleResetFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeClick={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              type={feedbackType}
              onFeedbackRestart={handleResetFeedback}
              onFeedbackSent={handleFeedbackSent}
            />
          )}
        </>
      )}
      <Footer />
    </div>
  );
}
