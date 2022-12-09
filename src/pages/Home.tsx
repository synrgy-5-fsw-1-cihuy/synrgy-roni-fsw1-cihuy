import Layout from "../components/Layout";
import { useAxios } from "../hooks/useAxios";

const HomePage = () => {
  const {
    response: data,
    error,
    isLoading,
  } = useAxios({
    url: "/users",
    method: "get",
  });
  return (
    <Layout>
      <div className="container-custom">
        <h1 className="mb-1 text-xl font-extrabold tracking-wide">Ini HomePage</h1>
      </div>
      <div className="container-custom">
        {isLoading ? (
          <p>Loading...</p>
        ) : data ? (
          <ul>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {data?.map((user: any) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        ) : (
          error && <p>Empty</p>
        )}
      </div>
    </Layout>
  );
};

export default HomePage;
