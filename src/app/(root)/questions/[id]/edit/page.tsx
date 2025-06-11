import { notFound, redirect } from "next/navigation";
import React from "react";

import QuestionForm from "@/components/forms/QuestionForm";
import ROUTES from "@/constants/routes";
import { getQuestion } from "@/lib/actions/question.action";

import { auth } from "../../../../../../auth";
import { RouteParams } from "../../../../../../types/global";

const EditQuestion = async ({ params }: RouteParams) => {
  const { id } = await params;

  if (!id) return notFound();
  const session = await auth();

  if (!session) return redirect("/sign-in");

  const { data: question, success } = await getQuestion({ questionId: id });
  if (!success || !question) return notFound();

  if (question?.author.toString() !== session?.user?.id)
    redirect(ROUTES.QUESTION(id));

  return (
    <main>
      <QuestionForm question={question} isEdit/>
    </main>
  );
};

export default EditQuestion;
