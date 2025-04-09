export const httpBodyParser = (input: string | null) => {
  if (input) {
    const body = !!JSON.parse(input) ? JSON.parse(input) : "";
    return body;
  }
};
