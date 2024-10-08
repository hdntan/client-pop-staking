import { Box, Flex, Link, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';
import useDisplayAddress from '@/hooks/useDisplayAddress';
import { useWalletContext } from '@/providers/WalletProvider';
import { ChevronDownIcon, ExternalLinkIcon, PlusSquareIcon } from '@chakra-ui/icons';
import { useApiContext } from '@/providers/ApiProvider';
import useBalances from '@/hooks/useBalances';
import AccountBalances from '@/components/AccountBalances';
import CopyAddressButton from '@/components/CopyAddressButton';

export default function WalletInfor() {

const { accounts, selectedAccount, setSelectedAccount } = useWalletContext();
  const addresses = useMemo(() => accounts.map((a) => a.address), [accounts]);
  const displayAddress = useDisplayAddress(selectedAccount?.address);

  useEffect(() => {
    if (selectedAccount && accounts.map((one) => one.address).includes(selectedAccount.address)) {
      return;
    }

    setSelectedAccount(accounts[0]);
  }, [accounts, selectedAccount, setSelectedAccount]);

  if (!selectedAccount) {
    return <></>;
  }

  const { name, address } = selectedAccount;

  return (
    <Box>
      <Menu autoSelect={false}>
        <MenuButton
          width='full'
          _hover={{ backgroundColor: 'gray.100' }}
          rounded={2}
          border={1}
          borderStyle='solid'
          borderColor='gray.200'>
          <Flex align='center' justify='space-between' gap={2} p={3} textAlign='left' cursor='pointer'>
            <Flex align='center' gap={3}>
              <Flex direction='column'>
                <Text fontWeight='bold' fontSize='lg'>
                  {name}
                </Text>
                <Text>{displayAddress}</Text>
              </Flex>
            </Flex>
            <ChevronDownIcon fontSize='4xl' />
          </Flex>
        </MenuButton>
        <MenuList>
          {accounts.map((one) => (
            <MenuItem
              backgroundColor={one.address === address ? 'gray.200' : ''}
              gap={2}
              key={one.address}
              onClick={() => setSelectedAccount(one)}>
              <span>{one.name}</span>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>

      <AccountBalances address={address} />
      <Flex my={4} gap={4} wrap='wrap'>
         <CopyAddressButton address={address} />
      </Flex>
      <Flex direction={'column'} gap={2}>
        <Link textColor='primary.500' href='https://paritytech.github.io/polkadot-testnet-faucet/' isExternal>
          Polkadot Testnet Faucet <ExternalLinkIcon mx='2px' />
        </Link>
        <Link textColor='primary.500' href='https://onboard.popnetwork.xyz/' isExternal>
        Onboard PAS to Pop Network <ExternalLinkIcon mx='2px' />
        </Link>
      </Flex>
    </Box>
  );
}
