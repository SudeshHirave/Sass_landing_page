
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const CodeBlock2 = () => {
    const lang = `Response {...}
  "access_token": "01DMEK0J53CVMC32CK5SE0KZ8Q",
  "profile": {
    "id": "prof_01DMC79VCBZ0NY2099737PSVF1",
    "connection_id": "conn_01E4ZCR3C56J083X43JQXF3JK5",
    "connection_type": "okta",
    "email": "alan@foo-corp.com",
    "first_name": "Alan",
    "last_name": "Turing",
    "idp_id": "00u1a0ufowBJlzPlk357",
    "object": "profile",
    "raw_attributes": {...}
  }`
  return (

    <div className="rounded-2xl h-full w-full  bg-foreground2 border border-border1">
      <div className="flex relative items-center font-thin text-thinfont pt-4 text-center text-base justify-center">
        HTTP 200
      </div>
      <div className="">
         <SyntaxHighlighter
           language='json'
           showLineNumbers={false}
           wrapLongLines={true}
           wrapLines={true}
           style={dracula}
           customStyle={{
             fontFamily: 'inherit',
             fontWeight: 100, 
             fontSize: '1rem',
             background: '#030527'
           }}
           >
           {lang}
         </SyntaxHighlighter>
      </div>
    </div>
  );
}
