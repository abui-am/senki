import { createRouter } from './context';
import { z } from 'zod';
import qr from 'qrcode';

export const participantsRouter = createRouter()
  .query('hello', {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `Hello ${input?.text ?? 'world'}`,
      };
    },
  })
  .query('getAll', {
    async resolve({ ctx }) {
      return await ctx.prisma.participant.findMany();
    },
  })
  .mutation('createParticipant', {
    input: z.object({ fullName: z.string().min(5), email: z.string() }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.participant.create({
        data: input,
      });
    },
  });
