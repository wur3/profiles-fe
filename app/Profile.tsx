
class Profile {
  firstName: string;
  lastName: string;
  age?: number;
  birthday?: Date;
  constructor(fn: string, ln: string) {
    this.firstName = fn;
    this.lastName = ln;
  }
  withAge(a: number) {
    this.age = a;
    return this;
  }
  withBirthday(b: Date) {
    this.birthday = b;
    return this;
  }
}

export default Profile;