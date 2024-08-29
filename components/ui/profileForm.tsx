"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Slider } from "@/components/ui/slider";

const formSchema = z.object({
  price: z
    .number()
    .min(-50, {
      message: "静かさMAX",
    })
    .max(50, {
      message: "うるささMAX",
    })
    .default(0),
});

export default function ProfileForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      price: 0,
    },
  });

  return (
    <div className="max-w-2xl mx-auto my-12">
      <Form {...form}>
        <form
          onSubmit={() => {
            alert(form.getValues().price);
          }}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="price"
            render={({ field: { value, onChange } }) => (
              <FormItem>
                <FormLabel>Price - {value}</FormLabel>
                <FormControl>
                  <Slider
                    min={-50}
                    max={50}
                    step={1}
                    defaultValue={[0]}
                    onValueChange={onChange}
                  />
                </FormControl>
                <FormDescription>
                  This is a description for the price.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
