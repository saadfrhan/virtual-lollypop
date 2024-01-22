import CreateLollyForm from "@/components/create-lolly-form";
import Header from "@/components/header";

export const metadata = {
  title: "Create Lolly!",
};

export default function CreateLolly() {
  return (
    <div>
      <Header />
      <CreateLollyForm />
    </div>
  );
}
