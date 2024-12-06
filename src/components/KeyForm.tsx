import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TUserKeyForm, UserKeyForm } from "@/lib/types";

export function KeyForm({
  setUserKey,
  isPresent,
}: {
  setUserKey: (userKey: TUserKeyForm) => void;
  isPresent: boolean;
}) {
  const form = useForm<TUserKeyForm>({
    resolver: zodResolver(UserKeyForm),
    defaultValues: {
      key: "",
    },
  });

  function onSubmit(data: TUserKeyForm) {
    setUserKey(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-6`}>
        <FormField
          control={form.control}
          name="key"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Key</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex gap-2">
          <Button type="submit">
            {isPresent ? `Enter Key` : `Create Key`}
          </Button>
        </div>
      </form>
    </Form>
  );
}
