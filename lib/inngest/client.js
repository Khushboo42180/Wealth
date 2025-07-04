import { Inngest } from "inngest";

//create a client to send and receive events
export const inngest=new Inngest({
    id: "welth",
    name:"Wealth",
    retryFunction: async(attempt)=>({
        delay:Math.pow(2,attempt)*1000 , //exponential backoff
        maxAttempts: 2,
    }),
});
