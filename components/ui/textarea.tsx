import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "placeholder:text-muted-foreground aria-invalid:ring-destructive/20 dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md bg-transparent px-3 py-2 transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 py-1",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
