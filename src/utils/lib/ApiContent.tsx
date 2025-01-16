// Ensure base URL is configured
const baseUrl = import.meta.env.VITE_CONTENT_API_URL;
if (!baseUrl) {
  throw new Error(
    "The environment variable VITE_CONTENT_API_URL is not configured.",
  );
}

export const fetchFeedContent = async (query?: string): Promise<any> => {
  const url = query ? `${baseUrl}/feed?${query}` : `${baseUrl}/feed`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch feed content.");
    }

    const data = await response.json();
    console.log(data);

    return data;
  } catch (error: any) {
    console.error("Error:", error.message);
    throw new Error("Failed to fetch feed content.");
  }
};

export const fetchUpdatesContent = async (): Promise<any> => {
  const url = `${baseUrl}/content/updates`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch updates content.");
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("Error:", error.message);
    throw new Error("Failed to fetch updates content.");
  }
};

export const fetchCampaignContent = async (): Promise<any> => {
  const url = `${baseUrl}/content/campaigns?count=4`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch campaign content.");
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("Error:", error.message);
    throw new Error("Failed to fetch campaign content.");
  }
};
