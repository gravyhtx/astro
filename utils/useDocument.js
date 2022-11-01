// UTILIZE NODES //



const [nodesList, setNodesList] = useState({
  div: {
    el: [],
    len:null,
  },
  p: {
    el: [],
    len:null,
  },
  a: {
    el: [],
    len:null,
  },
  id: {
    el: [],
    len:null,
  }
});


const getIds = (useStates) => {
  useStates = useStates === true ? true : false;
  let arr = [];
  useEffect(() => {
    arr = document.querySelectorAll('*[id]');
    if(nodesList.id.el === [] && useStates === true){
      setNodesList({ ...nodesList, id: { el: arr, len: arr.length } })
      return nodesList.id;
    }
  }, []);
  return arr;
}

const getDivs = (useStates) => {
  useStates = useStates === true ? true : false;
  let arr = [];
  useEffect(() => {
    arr = document.querySelectorAll('div');
    if(nodesList.div.el === [] && useStates === true){
      setNodesList({ ...nodesList, id: { el: arr, len: arr.length } })
      return nodesList.div;
    }
  }, []);
  return arr;
}

const getPs = (useStates) => {
  useStates = useStates === true ? true : false;
  let arr = [];
  useEffect(() => {
    arr = document.querySelectorAll('p');
    if(nodesList.p.el === [] && useStates === true){
      setNodesList({ ...nodesList, id: { el: arr, len: arr.length } })
      return nodesList.p;
    }
  }, []);
  return arr;
}

const getLinks = (useStates) => {
  useStates = useStates === true ? true : false;
  let arr = [];
  useEffect(() => {
    arr = document.querySelectorAll('a');
    if(nodesList.a.el === [] && useStates === true){
      setNodesList({ ...nodesList, id: { el: arr, len: arr.length } })
      return nodesList.a;
    }
  }, []);
  return arr;
}