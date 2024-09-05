export interface IUser {
  id: number;
  username: string;
  name: string;
  email: string;
  phone: string;
  website: string;
  address ?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company ?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface IForm {
    username: string;
    name: string;
    email: string;
    phone: string;
    website: string;
}