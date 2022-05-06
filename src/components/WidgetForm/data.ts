import bugImage from '../../assets/bug.svg';
import ideaImage from '../../assets/idea.svg';
import thoughImage from '../../assets/thought.svg';

export const feedbackTypes = {
  Bug: {
    title: 'Problema',
    image: {
      source: bugImage,
      alt: 'Iamge de um insieto',
    },
  },
  Idea: {
    title: 'Ideia',
    image: {
      source: ideaImage,
      alt: 'Iamge de uma lâmpada',
    },
  },
  Thought: {
    title: 'Outro',
    image: {
      source: thoughImage,
      alt: 'Iamge de um balão de pensamento',
    },
  },
};
