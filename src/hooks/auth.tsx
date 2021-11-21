import React, { 
  createContext, 
  ReactNode, 
  useContext, 
  useEffect, 
  useState, 
} from 'react';
import { Alert } from 'react-native';
import { FeedSchoolDTO } from '../dtos/FeedSchoolDTO';
import { ListSchoolDTO } from '../dtos/ListSchoolDTO';
import api from '../services/api';

interface AuthProviderProps {
  children: ReactNode;
}

interface SchoolProps {
  nomeAplicacao: string,
  contexto: string,
  urlLogoContexto: string,
  token: string,
}

interface FeedProps {
  feed: FeedSchoolDTO[];
}

interface IAuthContextData {
  school: SchoolProps[];
  feed: FeedSchoolDTO[];
  signIn(login: string, senha: string): Promise<void>;
  chargeSchool(contexto: string, token: string): Promise<void>;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({children}: AuthProviderProps) {
  const [school, setSchool] = useState<SchoolProps[]>([]);
  const [feed, setFeed] = useState<FeedSchoolDTO[]>([]);

  async function signIn(login: string, senha: string) {
    try {
      const response = await api.post<ListSchoolDTO>(`/login`, {
        login,
        senha
      });

      if(response.data.conteudo.length === 0) {
        Alert.alert("Usuário inválido", "Usuário ou senha inválida. Tente novamente.");
      }

      const conteudoAdded: SchoolProps[] = [];
      response.data.conteudo.map((conteudo) => {
        conteudoAdded.push({
          nomeAplicacao: conteudo.nomeAplicacao,
          contexto: conteudo.contexto,
          urlLogoContexto: conteudo.urlLogoContexto,
          token: conteudo.token, 
        })
      });

      // setSchool(conteudoAdded); // COMENTADO POR QUE NÃO ESTA FUNCIONANDO, AINDA NÃO SEI PQ
      // console.log(response.data);
      // console.log("Foi até o final");

    } catch (error) {
      console.log(error);
    }
  }

  async function chargeSchool(contexto: string, token: string) {
    try {
      const response = await api.post<FeedProps>(`https://${contexto}/api/mensagem/ultimas-noticias/v3`, {}, {
        headers: {
          "Content-type": "Application/json",
          "X-Authorization": `Bearer ${token}`
        }
      });

      const feedAdd: FeedSchoolDTO[] = [];

      response.data.feed.map((feedItem) => {
        feedAdd.push({
          ...feedItem
        })
      });

      setFeed(feedAdd);

      // console.log(response.data);
      // console.log("CARREGOU");

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // Testar valor retornado 
    const conteudoAdd: SchoolProps[] = [];

    conteudoAdd.push({
      nomeAplicacao: "Teste Zero",
      contexto: "testezero.tst2.escolaapp.com",
      urlLogoContexto: "https://eem-teste.s3.amazonaws.com/exemplo.escolaemmovimento.com.br/Documentos/6793_d9c776ee-52bb-4a36-92bb-9a1a5bdc4ecf.jpg?AWSAccessKeyId=AKIAJYOFO2QSKGWNZYXA&Expires=1893702677&Signature=h2AHpIgGGuaNO2iSmCfFPgwr7wc%3D",
      token: "slKh8HP5BC/z5A/MhyWhhaqAoOPjKIPBiUEqUBTmCqGdRkESxQSPVRDrysoQkjMaox9csArZkwqtXLaXZyQe2A==", 
    });

    setSchool(conteudoAdd);
  }, []);

  return (
    <AuthContext.Provider value={{ school, feed, signIn, chargeSchool }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export {AuthProvider, useAuth};