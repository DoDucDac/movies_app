import { toast } from "react-toastify";

export const showErrorMessage = (message: any) => {
  toast.error(
    message
      ? message.response.data.content
      : "An error occurred. Please contact your system administrator.",
    {
      position: "top-right",
      autoClose: 1500,
      theme: "dark",
    }
  );
};

export const showSuccessMessage = (message: string) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 1500,
    theme: "dark",
  });
};
