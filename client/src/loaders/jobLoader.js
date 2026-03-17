const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params?.id}`);
  return await res.json();
};

export { jobLoader };
