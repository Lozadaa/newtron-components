import React from "react"
import { SubmitHandler, UseFormProps } from "react-hook-form"

export type MFormProps = {
  children: React.ReactNode,
  config?: UseFormProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit?: SubmitHandler<{ [x: string]: any; }>,
}