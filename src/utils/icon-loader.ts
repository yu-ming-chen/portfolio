import {
  library,
  IconName,
  findIconDefinition,
  IconDefinition,
} from '@fortawesome/fontawesome-svg-core';
import {
  faMedium,
  faTwitter,
  faGithub,
  prefix as brandPrefix,
  faLinkedin,
  faInstagram,
  faBehance,
} from '@fortawesome/free-brands-svg-icons';
import {
  faGlobe,
  faEnvelope,
  faCoffee,
  prefix as basePrefix,
  faFile,
} from '@fortawesome/free-solid-svg-icons';

export const loadIcons = () =>
  library.add(
    faMedium,
    faLinkedin,
    faInstagram,
    faGithub,
    faGlobe,
    faEnvelope,
    faCoffee,
    faBehance,
    faFile,
  );

export const getIconDefinition = (
  iconName: IconName,
): IconDefinition | null => {
  return [brandPrefix, basePrefix].reduce(
    (acc: IconDefinition | null, prefix) => {
      return acc || findIconDefinition({ prefix, iconName });
    },
    null,
  );
};
