import React, {useState, useEffect} from 'react';
import card from '@site/src/css/markdown.module.css';

function PostsWithFetch({...props}) {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`./_rasp${props.num}.html`);
     
      const data = await response.text();
      const parser = new DOMParser();
      const HTMLDocument = parser.parseFromString(data, 'text/html');
      const pTag = [...HTMLDocument.querySelectorAll('p')];
      const pArray = await pTag.map((p) => {
        const pp = p.textContent.trim();
        return pp;
      });

     
      setPosts(pArray);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (props.num) fetchPosts();
  }, [props.num]);

  const length = posts.length;
  let polReisa = 0;
  let tudaObratno = [];
  for (let i = 0; i < length; i++) {
    if (/^\d/.test(posts[i])) {
      tudaObratno[polReisa] = posts[i];
      polReisa++;
    }
  }

  console.log('polReisa ' + polReisa);
  console.log('tudaObratno ' + tudaObratno);

  const pp = posts.length;
  console.log('pp = ' + pp);

  function ShowTime({p}) {
    return (
      <tr>
        <td>{p}</td>
      </tr>
    );
  }


  function UsePosts({dir}) {
    return (
      <div className={card.maxwidth}>
        {polReisa > 0 && dir === 'tuda' ? <p>{props.name}:</p> : <p>Сады:</p>}
        <table>
          <tbody>
            {polReisa > 0 && dir === 'tuda'
              ? tudaObratno.map((p, id) =>
                  id < polReisa / 2 ? <ShowTime key={id} p={p} /> : null,
                )
              : tudaObratno.map((p, id) =>
                  id >= polReisa / 2 ? <ShowTime key={id} p={p} /> : null,
                )}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div>
      <h1>{props.num}</h1>
      <div>
        <div className={card.wrap}>
          <UsePosts dir="tuda" />
          <UsePosts dir="obratno" />
        </div>
      </div>
    </div>
  );
}

export default PostsWithFetch;
