import { client } from './lib/client';

export async function getLandingPage() {
  const query = `*[_type == "landingPage"][0] {
    projects[]->{
      _id,
      title,
      year,
      items[]{
        ...,
        _type == 'image' => {
          "asset": asset->{
            _id,
            url,
            metadata {
              lqip
            }
          }
        },
        _type == 'video' => {
          "playbackId": video.asset->playbackId
        }
      }
    }
  }`;

  const data = await client.fetch(query);
  return data;
}
