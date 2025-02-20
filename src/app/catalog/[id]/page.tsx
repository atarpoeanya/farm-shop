function kekToKok(id: any): string{
  if(id == 'kek'){
    return 'kok';
  }
  else {
    return id;
  }
}
export default async function Page({ params }: any) {

  const { id } = await params

  return <h1>Blog Post: {kekToKok(id)}</h1>

}