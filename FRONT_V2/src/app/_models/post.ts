import { Group } from './group';
import { User } from './user';

export class Post {
  postId: number;
  title: string;
  description: string;
  image: string;
  date: Date;
  location: string;
  groups: Group[];
  participants: User[];
}
