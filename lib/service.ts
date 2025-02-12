import { fetchAPI } from "./base";

export async function getPosts() {
  const data = await fetchAPI(
    `query getAllPosts {
            posts {
              nodes {
                date
                slug
                title
                excerpt(format: RENDERED)
                featuredImage {
                  node {
                    mediaItemUrl
                  }
                }
              }
            }
          }`, `BLOG`
  );

  return data?.posts?.nodes;
}

export async function getSinglePost(slug) {
  const data = await fetchAPI(`query getSinglePost {
          post(id: "${slug}", idType: SLUG) {
            content(format: RENDERED)
            date
            excerpt(format: RENDERED)
            modified
            slug
            title(format: RENDERED)
            databaseId
            featuredImage {
              node {
                mediaItemUrl
              }
            }
          }
        }`, `BLOG`)
  return data?.post;
};


export async function getPostSlugs() {
  const data = await fetchAPI(`query getPostSlugs {
          posts {
            nodes {
              slug
            }
          }
        }`, `BLOG`)

  return data?.posts?.nodes;
};

export async function getCareers() {
  const data = await fetchAPI(``, `CAREER`)
  return data;
};

export async function getCareerHeader() {
  const data = await fetchAPI(``, `CAREERHEADER`)
  return data;
};
