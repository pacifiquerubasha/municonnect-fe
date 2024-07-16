"use client";

import { Button } from "@/components/ui/button";

import {
  ChevronDown,
  ChevronUp,
  CornerDownLeft,
  Mic,
  Paperclip,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { TooltipProvider } from "@radix-ui/react-tooltip";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useUser } from "@clerk/nextjs";
import {
  getMessages,
  getSampleQuestions,
  sendMessage,
} from "@/services/endpoints/messages";
import Message from "./Message";
import { useForm } from "react-hook-form";
import { ReloadIcon } from "@radix-ui/react-icons";
import { message } from "antd";
import { Skeleton } from "@/components/ui/skeleton";

const ChatBody = () => {
  const { user } = useUser();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm();

  const searchParams = useSearchParams();
  const dataset = searchParams.get("dataset");
  const fileName = searchParams.get("name");

  const [messages, setMessages] = useState<any>([]);
  const [isLoadedMessages, setIsLoadedMessages] = useState(false);

  const handleGetMessages = async (dataset: string) => {
    try {
      setIsLoadedMessages(false);
      const response = await getMessages(user?.id as string, dataset);
      if (response.data) {
        setMessages(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadedMessages(true);
    }
  };

  const bottomRef = useRef<HTMLDivElement>(null);

  const [isAwaitingMessage, setIsAwaitingMessage] = useState<boolean>(false);
  const handleSendMessage = async (values: any) => {
    try {
      const data = {
        userMessage: values.message,
        datasetId: dataset,
        fileName,
      };
      setMessages((prevMessages: any) => [
        ...prevMessages,
        {
          userMessage: values.message,
          botMessage: "Please wait...",
          date: new Date().toISOString(),
        },
      ]);
      reset();
      setIsAwaitingMessage(true);
      const response = await sendMessage(user?.id as string, data);
      if (response.data) {
        //CHANGE THE last message's BOT MESSAGE TO THE RESPONSE FROM THE SERVER
        setMessages((prevMessages: any) => {
          const lastMessage = prevMessages[prevMessages.length - 1];
          prevMessages[prevMessages.length - 1] = {
            userMessage: lastMessage.userMessage,
            botMessage: response.data.botMessage,
            date: lastMessage.date,
          };
          console.log("prevMessages", prevMessages);
          return prevMessages;
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsAwaitingMessage(false);
    }
  };

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const [sampleQuestions, setSampleQuestions] = useState<any>([]);
  const [isLoadedSampleQuestions, setIsLoadedSampleQuestions] = useState(false);
  const handleGetSampleQuestions = async (fileName: string) => {
    try {
      setIsLoadedSampleQuestions(false);
      const data = {
        fileName,
        datasetId: dataset,
      };
      const response = await getSampleQuestions(user?.id as string, data);
      if (response.data) {
        if (response?.data?.questions)
          setSampleQuestions(response.data.questions);
        console.log(response.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadedSampleQuestions(true);
    }
  };

  useEffect(() => {
    if (user) {
      handleGetSampleQuestions(fileName as string);
      handleGetMessages(dataset as string);
    }
  }, [user]);

  const [isShowSampleQuestions, setIsShowSampleQuestions] =
    useState<boolean>(true);

  const handleClickSampleQuestion = (question: string) => {
    setValue("message", question);
    handleSendMessage({ message: question });
  };

  const sampleQuestionsToShow = sampleQuestions?.filter((question: any) => {
    return !messages.some((message: any) => message.userMessage === question);
  });

  return (
    <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-3">
      <Badge variant="outline" className="absolute right-3 top-3">
        Output
      </Badge>
      <div className="flex-1 mt-8">
        {(!isLoadedMessages && !isLoadedSampleQuestions) && (
          <>
            {new Array(5).fill(0).map((_, index) => (
              <div className="flex flex-col gap-4">
                <Skeleton className="h-12 w-[40%] ml-auto" />
                <Skeleton className="h-12 w-[40%]" />
              </div>
            ))}
          </>
        )}

        {messages?.map((message: any, index: number) => {
          const _message = {
            userMessage: message.userMessage,
            botMessage: message.botMessage,
            date: message.date,
          };
          return <Message message={_message} />;
        })}

        {sampleQuestionsToShow?.length > 0 && isLoadedSampleQuestions && (
          <div className="flex flex-col gap-2 my-8">
            <div
              className="flex items-center gap-4"
              onClick={() => setIsShowSampleQuestions((prev) => !prev)}
            >
              <span>{isShowSampleQuestions ? "Hide" : "Show"} prompts</span>
              {isShowSampleQuestions ? <ChevronUp /> : <ChevronDown />}
            </div>
            {isShowSampleQuestions && (
              <div className="flex flex-wrap gap-4 py-4">
                {sampleQuestionsToShow?.map((question: any, index: number) => (
                  <div
                    className="p-2 rounded-md text-sm bg-gray-300 cursor-pointer"
                    onClick={() => {
                      handleClickSampleQuestion(question);
                    }}
                  >
                    {question}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      <div ref={bottomRef} />
      <form
        className="sticky bottom-0 overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
        x-chunk="dashboard-03-chunk-1"
        onSubmit={handleSubmit(handleSendMessage)}
      >
        <Label htmlFor="message" className="sr-only">
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="Type your message here..."
          className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
          {...register("message", { required: true })}
          readOnly={isAwaitingMessage}
        />
        <div className="flex items-center p-3 pt-0">
          <Button
            type="submit"
            size="sm"
            className="ml-auto gap-1.5"
            disabled={isAwaitingMessage}
          >
            {isSubmitting ? (
              <>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </>
            ) : (
              <>
                Send Message
                <CornerDownLeft className="size-3.5" />
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatBody;
