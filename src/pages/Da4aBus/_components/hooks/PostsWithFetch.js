import React, {useState, useEffect} from 'react';
import card from '@site/src/css/markdown.module.css';
import CodeBlock from '@theme/CodeBlock';
import BrowserWindow from '@site/src/components/BrowserWindow';

function PostsWithFetch({...props}) {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`./_rasp${props.num}.html`);
      //https://old.orenburg.ru/background/raspisanie_sadovodcheskikh_marshrutov/marshrut_${props.num}/
      const data = await response.text();
      //setPosts(postsData.match(/<p.*/g));
      const parser = new DOMParser();
      const HTMLDocument = parser.parseFromString(data, 'text/html');
      const pTag = [...HTMLDocument.querySelectorAll('p')];
      const pArray = await pTag.map((p) => {
        const pp = p.textContent.trim();
        return pp;
      });

      //return HTMLDocument;
      //console.log([...HTMLDocument.querySelectorAll('p')]);
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

  //let pp = '4.00';

  let count = 0;
  const pp = posts.length;
  console.log('pp = ' + pp);

  //const countTime = posts.map((post, id) => {
  //  const p = post.textContent.trim();
  //  if (!/(Маршрут|Перевозчик)/.test(p)) {
  //    if (/^\d/.test(p)) {
  //      count = count + 1;
  //      //console.log('count = ' + count);
  //      //console.log('id = ' + id);
  //      if (id === pp - 2) {
  //        //console.log('Ura! pp =' + pp + ', id = ' + id);
  //        return count;
  //      }
  //    }
  //  }
  //});

  function ShowTime({p}) {
    return (
      <tr>
        <td>{p}</td>
      </tr>
    );
  }

  //var str = 'This IS a tyY';
  //var pattern = /[A-Z]/g;
  //var matches = str.match(pattern);

  //console.log(Array.isArray(matches));
  //matches.forEach((item) => console.log(item));
  //console.log(matches.length);

  //console.log('tuda = ' + tuda);

  function UsePosts({dir}) {
    //console.log('DIR = ' + dir);
    return (
      <div className={card.maxwidth}>
        {polReisa > 0 && dir === 'tuda' ? <p>{props.name}:</p> : <p>Сады:</p>}
        <table>
          {/*<thead>
            <tr>
              <th>{props.num}</th>
            </tr>
          </thead>*/}
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
      {/*<h2>Dummy API - https://jsonplaceholder.typicode.com/posts</h2>*/}
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
