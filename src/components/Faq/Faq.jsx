import React, { useState } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';

import './Faq.scss';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="faq__container">
      <h1 className="faq__title">F.A.Q</h1>
      <div className="faq__senteces__container">
        <Accordion>
          <Accordion.Title
            active={activeIndex === 0}
            onClick={() => {
              setActiveIndex(0);
            }}
          >
            <Icon name="dropdown" />
            What is a dog?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <p>
              A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many across
              across the world.
            </p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 1}
            onClick={() => {
              setActiveIndex(1);
            }}
          >
            <Icon name="dropdown" />
            What is a dog?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <p>
              A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many across
              across the world.
            </p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 2}
            onClick={() => {
              setActiveIndex(2);
            }}
          >
            <Icon name="dropdown" />
            What is a dog?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <p>
              A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many across
              across the world.
            </p>
          </Accordion.Content>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
