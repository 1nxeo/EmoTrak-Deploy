// 지현
export interface Idtype {
  id?: number;
}

export interface date {
  year: number;
  month: number;
  date?: number;
  day?: number;
}

interface DataDetail extends Idtype {
  day: number;
  emoId: number;
  detail: string;
}

export interface DayProps {
  side: boolean;
  setSide: React.Dispatch<React.SetStateAction<boolean>>;
  data: {
    year: number;
    month: number;
    contents: DataDetail[];
  };
  diaryDay: Partial<date>;
  item: Partial<date>;
  today: date;
  children: React.ReactNode;
}

export interface KeyType {
  [key: string]: string;
}

export interface PropsType extends ChildrenType {
  diaryDay?: Partial<date>;
}
export interface ChildrenType {
  children: React.ReactNode;
}

export interface BooleanType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export type ModalState = BooleanType[];

export interface ImageType extends Idtype {
  imgUrl: string;
}

export interface SelectType {
  page: number;
  emo: string;
  size: number;
  sort: string;
}

export interface CommentType {
  comment: string;
}

export interface CommentProps extends Idtype {
  paramId: number;
  commentData: commentData[];
  index: number;
  item: commentData;
}

export interface commentData extends Idtype {
  likesCnt: number;
  comment: string;
  createAt: string;
  email: string;
  hasAuth: boolean;
  id: number;
  nickname: string;
  hasLike: boolean;
}

export interface UriType {
  uri: string;
}
