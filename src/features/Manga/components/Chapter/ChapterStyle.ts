import styled from "styled-components";

const ChapterStyle = styled.div`
  display: grid;
  grid-template-areas: "tom number .  author date likes";
  grid-template-columns: max-content max-content 1fr max-content max-content max-content;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 820px) {
    grid-template-areas: "tom number  author date likes";
    grid-template-columns: max-content max-content 1fr 1fr max-content;
  }

  width: 100%;
  padding: 8px 12px;
  background-color: hsla(0, 0%, 55%, 0.05);
  border-radius: 6px;
  cursor: pointer;

  .ChapterLikes {
    grid-area: likes;
    display: flex;
    align-items: center;
    gap: 8px;
    width: max-content;
    padding: 8px;
    font-size: 14px;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.warning};
  }
  .ChapterLikes:hover {
    background-color: rgba(255, 180, 0, 0.1);
  }
  .ChapterTom {
    grid-area: tom;
    padding: 3px 18px 3px 8px;
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  .ChapterNumber {
    grid-area: number;
    margin: 4px 30px 4px 0;
    font-size: 16px;
    line-height: 1.5;
  }
  .ChapterAuthor {
    grid-area: author;
    margin: 2px 16px 2px 0;
    font-size: 14px;
    line-height: 1.43;
    color: ${({ theme }) => theme.colors.textSecondary};

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ChapterDate {
    grid-area: date;
    margin: 2px 12px 2px 0;
    font-size: 14px;
    line-height: 1.43;
    color: ${({ theme }) => theme.colors.textSecondary};

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default ChapterStyle;
