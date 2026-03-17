const personLoader = async ({ params }) => {
  const res = await fetch(`/api/developers/${params?.id}`);
  return await res.json();
};

export { personLoader };
