const formatDate = (date: string) => {
    return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric" }).format(new Date(date));
  };


  export default formatDate