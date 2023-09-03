export interface UserResponse {
  results: User[];
}

interface User {
  name: UserName;
  picture: UserPicture;
}

interface UserName {
  title: string;
  first: string;
  last: string;
}

interface UserPicture {
  large: string;
  medium: string;
  thumbnail: string;
}
