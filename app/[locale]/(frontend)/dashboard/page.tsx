import { Text } from "@mantine/core";
import { useTranslations } from "next-intl";
function Dashboard() {
  const t = useTranslations();
  return <Text>{t("HomePage.title")}</Text>;
}
export default Dashboard;
