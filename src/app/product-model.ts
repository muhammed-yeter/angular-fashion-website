export class Comment {
  commenter_id: number = 0;
  commenter_username: string = 'Anonymus User';
  commenter_type: string = 'User';
  commenter_comment: string = 'No Comment.';
}

export class Product {
  id: number = 0;
  name: string = '';
  category: string = '';
  brand: string = '';
  price: number = 0;
  image: string = 'favicon.ico';
  size?: string[];
  material?: string;
  comments: Comment[] = [];
}
