import styled from "styled-components";

import { Title } from "@/components/atoms/title";
import Topic from "@/components/molecules/discussedTopic";
import { topicData } from "@/dummy/topicData";

const title = "광장이 지금\n얘기하고 있는 주제";
const DiscussedTopics = () => {
  return (
    <Container>
      <div className="inner">
        <Title title={title} />
      </div>
      <DiscussedTopicContainer>
        {topicData.map((data, idx) => (
          <Topic
            title={data.title}
            subTitles={data.subTitles}
            idx={idx}
            key={idx}
          />
        ))}
      </DiscussedTopicContainer>
      <div className="inner">
        <div className="addingTopic">주제를 추가하고 싶어요.</div>
      </div>
    </Container>
  );
};

export default DiscussedTopics;

const Container = styled.div`
  background-color: var(--Gray3_200);
  width: 100%;
  padding-top: 50px;
  padding-bottom: 105.5px;
  box-sizing: border-box;
  @media (max-width: 1080px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .inner {
    width: 1080px;
    margin: 0 auto 20px;
    @media (max-width: 1080px) {
      display: flex;
      width: 770px;
      justify-content: center;
    }
    @media (max-width: 880px) {
      width: 600px;
    }
    @media (max-width: 564px) {
      width: 300px;
    }
  }
  .addingTopic {
    margin-top: 20px;
    float: right;
    display: inline-flex;
    padding: 8px 14px;
    justify-content: center;
    align-items: center;
    border-radius: 55px;
    background: var(--Gray4_300, #d9d9d9);
    color: var(--Gray8_700, #616161);
    text-align: center;
    cursor: pointer;
  }
`;
const DiscussedTopicContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1080px;
  margin: 0 auto;
  background-color: var(--Gray3_200);
  @media (max-width: 1080px) {
    flex-flow: wrap;
    display: flex;
    width: 770px;
    justify-content: space-evenly;
    gap: 20px;
    transform: scale(0.9);
    padding: 0;
  }
  @media (max-width: 880px) {
    width: 600px;
  }
  @media (max-width: 564px) {
    width: 300px;
  }
`;
