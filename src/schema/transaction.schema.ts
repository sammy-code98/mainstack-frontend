import { z } from "zod";

export const filterSchema = z.object({
  dateFrom: z.date().optional().nullable(),
  dateTo: z.date().optional().nullable(),
  type: z.array(z.string()).optional().nullable(),
  status: z.array(z.string()).optional().nullable(),
});

export type FilterSchema = z.infer<typeof filterSchema>;
