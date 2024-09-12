// logo
// user details
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navBar = () => {
  return (
    <div className=" flex justify-between items-center ">
      <h1 className="text-2xl font-bold pl-3 pr-5">Debt Manager</h1>
      <Avatar className="cursor-pointer">
        <AvatarImage src="/avatar.jpg" alt="avatar" />
        <AvatarFallback>RA</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default navBar;
