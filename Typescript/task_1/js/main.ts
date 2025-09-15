// Teacher interface definition
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Example usage
const teacher3: Teacher = {
  firstName: 'Adrian',
  fullTimeEmployee: false,
  lastName: 'Liew',
  location: 'Melbourne',
  contract: false,
};

console.log(teacher3);