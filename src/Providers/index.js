import { UserProvider } from "./user";
import { HabitsProvider } from "./habits";
import { GroupsProvider } from "./groups";
import { TokenProvider } from "./token";
import { AuthenticationProvider } from "./Authentication";
import { GoalsActivitiesProvider } from "./Goals&Activities";

const Providers = ({ children }) => {
  return (
    <TokenProvider>
      <AuthenticationProvider>
        <UserProvider>
          <HabitsProvider>
            <GroupsProvider>
              <GoalsActivitiesProvider>{children}</GoalsActivitiesProvider>
            </GroupsProvider>
          </HabitsProvider>
        </UserProvider>
      </AuthenticationProvider>
    </TokenProvider>
  );
};

export default Providers;
