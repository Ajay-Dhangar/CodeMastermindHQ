
import {sortBy} from '@site/src/utils/jsUtils';

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export type TagType =
  | 'favorite'
  | 'opensource'
  | 'product'
  | 'design'
  | 'versioning'
  | 'large'
  | 'meta'
  | 'personal'
  | 'templates'
  | 'portfolio'  
  | 'clone'
  | 'react';

export type User = {
  title: string;
  description: string;
  preview: string;
  website: string;
  source: string | null;
  tags: TagType[];
};

export const Tags: {[type in TagType]: Tag} = {
  // DO NOT USE THIS TAG: we choose sites to add to favorites
  favorite: {
    label: 'Favorite',
    description:
      'Our favorite CodeMastermindHQ sites that you must absolutely check-out!',
    color: '#e9669e',
  },

  // For open-source sites, a link to the source code is required
  // The source should be your *website's* source, not your project's source!
  opensource: {
    label: 'Open-Source',
    description: 'Open-Source CodeMastermindHQ sites can be useful for inspiration!',
    color: '#39ca30',
  },

  product: {
    label: 'Product',
    description: 'CodeMastermindHQ sites associated to a commercial product!',
    color: '#dfd545',
  },

  design: {
    label: 'Design',
    description:
      'Beautiful CodeMastermindHQ sites, polished and standing out from the initial template!',
    color: '#a44fb7',
  },
 
  react: {
    label: 'React',
    description:
      'Translated CodeMastermindHQ sites using the internationalization support with more than 1 locale.',
    color: '#127f82',
  },
  

  versioning: {
    label: 'Versioning',
    description:
      'CodeMastermindHQ sites using the versioning feature of the docs plugin to manage multiple versions.',
    color: '#fe6829',
  },

  // Large sites, with a lot of content (> 200 pages, excluding versions)
  large: {
    label: 'Large',
    description:
      'Very large CodeMastermindHQ sites, including many more pages than the average!',
    color: '#8c2f00',
  },

  meta: {
    label: 'Meta',
    description: 'CodeMastermindHQ sites of Meta projects',
    color: '#4267b2', // CodeMastermindHQ blue
  },

  personal: {
    label: 'Personal',
    description:
      'Personal websites, blogs and digital gardens built with CodeMastermindHQ',
    color: '#14cfc3',
  },

  templates: {
    label: 'Templates',
    description:
      'CodeMastermindHQ sites using the templates reading direction support.',
    color: '#ffcfc3',
  },
  portfolio: {
    label: 'portfolio',
    description:
      'CodeMastermindHQ sites using the coding direction for portfolio.',
    color: '#ff4400',
  },

  clone: {
    label: 'Clone',
    description:
      'CodeMastermindHQ sites using the clone projects reading',
    color: '#004400',
  },

};

// Add your site to this list
// prettier-ignore
const Users: User[] = [ 
 
  {
    title: 'Adding a Search Bar',
    description: 'Adding a Search Bar to your Blog Section or Blog Post - live demo',
    preview: require('/img/thumb.png'),
    website: 'https://www.youtube.com/watch?v=3PRCek1sSuY',
    source: 'https://www.youtube.com/channel/UCRQBq8dfTEZfIMxmq-Ba9Tw',
    tags: ['opensource'],
  },  
  {
    title: 'Aid-Free YouTube Clone',
    description: 'Discover a New Way to Watch YouTube - Introducing the Aid-Free YouTube Clone',
    preview: require('/img/thumb.png'),
    website: 'https://www.youtube.com/watch?v=_IT3uO637bg&t=1s',
    source: 'https://www.youtube.com/channel/UCRQBq8dfTEZfIMxmq-Ba9Tw',
    tags: ['opensource'],
  },  
];

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes('favorite'));
  return result;
}

export const sortedUsers = sortUsers();
