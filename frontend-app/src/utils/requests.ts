const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const response = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: email, password }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json();
};

const getInvoices = async ({
  accessToken,
  offset,
  limit,
}: {
  accessToken: string;
  offset: number;
  limit: number;
}) => {
  const response = await fetch(
    `http://localhost:3000/invoices?offset=${offset}&limit=${limit}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      JSON.stringify({
        statusText: response.statusText,
        status: response.status,
      })
    );
  }

  return response.json();
};

const getInvoice = async ({
  id,
  accessToken,
}: {
  id: string;
  accessToken: string;
}) => {
  const response = await fetch(`http://localhost:3000/invoices/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error(
      JSON.stringify({
        statusText: response.statusText,
        status: response.status,
      })
    );
  }

  return response.json();
};

export { loginUser, getInvoices, getInvoice };
