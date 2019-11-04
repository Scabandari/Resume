import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';

const [ALL, NUMBER, LETTER] = ['All', 'Number', 'Letter'];
const data = [
  {
    tags: [ALL, NUMBER],
    value: '1'
  },
  {
    tags: [ALL, LETTER],
    value: 'a'
  },
  {
    tags: [ALL, NUMBER],
    value: '2'
  },
  {
    tags: [ALL, LETTER],
    value: 'b'
  },
  {
    tags: [ALL, NUMBER],
    value: '3'
  },
  {
    tags: [ALL, LETTER],
    value: 'c'
  },
  {
    tags: [ALL, NUMBER],
    value: '4'
  },
  {
    tags: [ALL, LETTER],
    value: 'd'
  }
];

const renderData = (allValues, filterTag) => {
  let filteredList = allValues.filter(val => {
    return val['tags'].includes(filterTag);
  });

  return (
    <div>
      {filteredList.map(object_ => {
        return object_.value;
      })}
    </div>
  );
};

const BaseCase = props => {
  const [activeItem, setActiveItem] = useState(ALL);
  return (
    <div>
      <Menu inverted stackable fluid widths={4}>
        <Menu.Item
          name={ALL}
          active={activeItem === ALL}
          onClick={(e, { name }) => setActiveItem(name)}
        />
        <Menu.Item
          name={NUMBER}
          active={activeItem === NUMBER}
          onClick={(e, { name }) => setActiveItem(name)}
        />
        <Menu.Item
          name={LETTER}
          active={activeItem === LETTER}
          onClick={(e, { name }) => setActiveItem(name)}
        />
      </Menu>
      <div>{renderData(data, activeItem)}</div>
    </div>
  );
};

export default BaseCase;
