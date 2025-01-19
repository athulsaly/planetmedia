interface LabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errormessage?: string;
  touched?: boolean;
  showError?: boolean;
}

interface FormCardProps {
  children: React.ReactNode;
  className?: string;
}

interface CheckboxWithTextProps {
  text: string;
  subText?: string;
  className?: string;
  asChild?: boolean;
  defaultChecked?: boolean | "indeterminate";
  checked?: boolean | "indeterminate";
  onCheckedChange?: function;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
  id?: string;
  errormessage?: string;
  touched?: boolean;
  showError?: boolean;
}

interface AdvertBoxProps {
  src: string;
  alt: string;
  onClick?: () => void;
  description: string;
  title: string;
  price: number;
  id: number;
}

interface LoginResponseProps {
  jwt: string;
  user: {
    id: number;
    documentId: string;
    username: string;
    email: string;
    provider: string;
    confirmed: true;
    blocked: boolean;
    firstName: string;
    lastName: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    phone: string;
    location: string;
  };
}

interface ProfileResponseProps {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  location: string;
}
interface UserDetailsProps {
  user: {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    location: string;
  };
}

interface AdListProps {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface CreateAdResponseProps {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface AdDetailsProps {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface AdvertisementDetailsProps {
  params: {
    id: string;
  };
}
