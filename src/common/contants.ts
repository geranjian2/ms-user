export enum RabbitMQ {
  UserQueue = 'users',
  PassengerQueue = 'passengers',
  FligthQueue = 'fligths',
}

export enum UserMSG {
  CREATE = 'CREATE_USER',
  FIND_ALL = 'FIND_USERS',
  FIND_ONE = 'FIND_USER',
  UPDATE = 'UPDATE_USER',
  DELETE = 'DELETE_USER',
  VALIDATE_USER = 'VALIDATE_USER',
}
