import { shippingFormSchema, ShippingFormInputs } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const ShippingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  });
  return <form>ShippingForm</form>;
};

export default ShippingForm;
